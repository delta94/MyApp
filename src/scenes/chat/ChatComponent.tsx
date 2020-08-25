import React, {useState} from 'react'
import {
  ImageSourcePropType,
  Keyboard,
  Platform
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

  const renderAttachmentsMenu = (): React.ReactElement => (
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
  );
  return (
    <SafeAreaLayout
      style={styles.container}
      insets={SaveAreaInset.TOP}>
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
      {attachmentsMenuVisible && renderAttachmentsMenu()}
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