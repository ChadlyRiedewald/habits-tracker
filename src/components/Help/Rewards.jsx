import { AccordionWrapper } from './Faq';
import Accordion from '../Accordion';

const menuData = [
    {
        id: 1,
        title: 'What are rewards?',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
        id: 2,
        title: 'Where can I see my rewards?',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
        id: 3,
        title: 'How can i earn rewards?',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
];

const Rewards = () => {
    return (
        <AccordionWrapper>
            {menuData.map(({ title, content, id }) => (
                <Accordion key={id} title={title} content={content} />
            ))}
        </AccordionWrapper>
    );
};

export default Rewards;
