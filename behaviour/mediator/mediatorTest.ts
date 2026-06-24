import ChatRoom from "./chatRoom";
import ChatUser from "./chatUser";

function mediatorTest() {
    const chatRoom = new ChatRoom();

    const roman = new ChatUser("Roman");
    const maryna = new ChatUser("Maryna");
    const maksym = new ChatUser("Maksym");

    chatRoom.addUser(roman);
    chatRoom.addUser(maryna);
    chatRoom.addUser(maksym);

    roman.send('Hello everyone!');
    maryna.send('Hi Roman!');
    maksym.send('Hi everyone!');

    const stranger = new ChatUser("Stranger");
    stranger.send('Hi. I am a stranger');
}

export default mediatorTest;
