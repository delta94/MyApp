import React, {useState} from 'react'
import {
  ImageSourcePropType,
  Keyboard,
  Platform,
  Animated,
  Dimensions,
} from 'react-native'
import {
  Button,
  Input,
  StyleService,
  useStyleSheet
} from '@ui-kitten/components'
import {
  MicIcon,
  PaperPlaneIcon,
  PlusIcon
} from '@assets/icons'
import { KeyboardAvoidingView } from '@components/KeyboardAvoidingViewComponent'
import { AttachmentsMenu } from '@components/chat/AttachmentsMenuComponent'
import { Message } from '@data/chat'
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '@components/safe-area-layout.component'
import { ChatScreenProps } from '@navigation/ChatNavigator'
import { Chat } from '@components/chat/ChatComponent'
import { Toolbar } from '@components/toolbar.component';

const  deviceHeight = Dimensions.get('window').height

const initialMessages: Message[] = [

];

const galleryAttachments: ImageSourcePropType[] = [
  require('@assets/images/image-attachment-1.png'),
  require('@assets/images/image-attachment-2.jpg'),
];

const keyboardOffset = (height: number): number => Platform.OS === 'ios' ? height : 0

export const ChatScreen = (props: ChatScreenProps): SafeAreaLayoutElement => {
  const styles = useStyleSheet(themedStyles);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState<string>('');
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = useState<boolean>(false);
  // const [modalY, setModalY] = useState(new Animated.Value(-deviceHeight))
  let modalY = new Animated.Value(0)

  const sendButtonEnabled = (): boolean => {
    return message !== '' && message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    setMessages([...messages, new Message(message, 'now', true, null)]);
    setMessage('');
    Keyboard.dismiss();
  };

  const openModal = () => {
    Animated.timing(modalY, {
        duration: 300,
        toValue: 200,
        useNativeDriver: true
     }).start(); 

  const closeModal = () => {
    Animated.timing(modalY, {
        duration: 300,
        toValue: -deviceHeight,
        useNativeDriver: true
     }).start();
  }

  const renderAttachmentsMenu = (): React.ReactElement => (
    <Animated.View style={{
      transform: [{ translateY: 0 }]
    }}>
    <AttachmentsMenu
      attachments={galleryAttachments}
      onSelectPhoto={toggleAttachmentsMenu}
      onSelectFile={toggleAttachmentsMenu}
      onSelectLocation={toggleAttachmentsMenu}
      onSelectContact={toggleAttachmentsMenu}
      onAttachmentSelect={toggleAttachmentsMenu}
      onCameraPress={toggleAttachmentsMenu}
      onDismiss={toggleAttachmentsMenu}
    />
    </Animated.View>
  );
  return (
    <SafeAreaLayout
      style={styles.container}
      insets={SaveAreaInset.TOP}
    >
      <Toolbar
        title='Chat'
        onBackPress={props.navigation.goBack}
      />
      <Chat
        style={styles.list}
        contentContainerStyle={styles.listContent}
        followEnd={true}
        data={messages}
      />
      <KeyboardAvoidingView
        style={styles.messageInputContainer}
        offset={keyboardOffset}>
        <Button
          style={[styles.iconButton, styles.attachButton]}
          accessoryLeft={PlusIcon}
          onPress={toggleAttachmentsMenu}
        />
        <Input
          style={styles.messageInput}
          placeholder='Message...'
          value={message}
          onChangeText={setMessage}
          accessoryLeft={MicIcon}
        />
        <Button
          appearance='ghost'
          style={[styles.iconButton, styles.sendButton]}
          accessoryLeft={PaperPlaneIcon}
          disabled={!sendButtonEnabled()}
          onPress={onSendButtonPress}
        />
      </KeyboardAvoidingView>
      <Animated.View style={{
        // height: modalY
        transform: [{ translateY: modalY }]
      }}>
      <AttachmentsMenu
        attachments={galleryAttachments}
        onSelectPhoto={toggleAttachmentsMenu}
        onSelectFile={toggleAttachmentsMenu}
        onSelectLocation={toggleAttachmentsMenu}
        onSelectContact={toggleAttachmentsMenu}
        onAttachmentSelect={toggleAttachmentsMenu}
        onCameraPress={toggleAttachmentsMenu}
        onDismiss={toggleAttachmentsMenu}
      />
    </Animated.View>
    { attachmentsMenuVisible &&
      openModal()
    }
      {/* {attachmentsMenuVisible && renderAttachmentsMenu()} */}
    </SafeAreaLayout>
  )
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  messageInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'background-basic-color-1',
  },
  attachButton: {
    borderRadius: 24,
    marginHorizontal: 8,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  sendButton: {
    marginRight: 4,
  },
  iconButton: {
    width: 24,
    height: 24,
  },
});