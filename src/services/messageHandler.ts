// messageHandler.ts

type WhatsAppCommand = 'start' | 'help' | 'info';

const messageHandler = (command: WhatsAppCommand, args: string[]): string => {
    switch (command) {
        case 'start':
            return 'Welcome to the Event Campaign Assistant! How can I help you today?';
        case 'help':
            return 'Here are the commands you can use: start, help, info.';
        case 'info':
            return 'This is the Event Campaign Assistant, providing you support for your event needs.';
        default:
            return 'Unknown command. Type "help" for a list of available commands.';
    }
};

export default messageHandler;