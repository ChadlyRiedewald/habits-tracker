import Accordion from '../Accordion';
import { AccordionWrapper } from './Faq';

const menuData = [
    {
        id: 1,
        title: 'How do I make a habit?',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
        id: 2,
        title: 'How do I change a habit?',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
        id: 3,
        title: 'How do I delete a habit?',
        content: `Sapiente pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
        id: 4,
        title: 'Where can I find my habits?',
        content: `Sapiente pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas? Pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste?`,
    },
    {
        id: 5,
        title: 'Where can I see my completed habits?',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
];

const Habits = () => {
    return (
        <AccordionWrapper>
            {menuData.map(({ title, content, id }) => (
                <Accordion key={id} title={title} content={content} />
            ))}
        </AccordionWrapper>
    );
};

export default Habits;
