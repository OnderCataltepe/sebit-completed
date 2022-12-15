import Quote from '../components/Quote';
import Regular from '../components/Regular';
import Photo from '../components/Photo';
import LinkPost from '../components/LinkPost';
import Conversation from '../components/Conversation';
import Audio from '../components/Audio';

export const typeFunction = (data) => {
  switch (data.type) {
    case 'quote':
      return <Quote data={data} />;

    case 'regular':
      return <Regular data={data} />;

    case 'photo':
      return <Photo data={data} />;

    case 'link':
      return <LinkPost data={data} />;

    case 'conversation':
      return <Conversation data={data} />;

    case 'audio':
      return <Audio data={data} />;

    default:
      return null;
  }
};
