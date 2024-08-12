export interface Post {
    id: number;
    title: string;
    description: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    return [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            description: '“Hope is a good thing, maybe the best of things, and no good thing ever dies.” - The Shawshank Redemption. This powerful quote reminds us that no matter the hardships we face, hope can guide us through even the darkest of times, and it is something that no one can take away from us.'
        },
        {
            id: 2,
            title: 'Forrest Gump',
            description: '“Life is like a box of chocolates. You never know what you\'re gonna get.” - Forrest Gump. This quote encapsulates the unpredictable nature of life, emphasizing that surprises, both good and bad, are an inevitable part of our journey, and we should embrace them with an open heart.'
        },
        {
            id: 3,
            title: 'The Godfather',
            description: '“I\'m gonna make him an offer he can\'t refuse.” - The Godfather. This iconic line from the movie signifies power and influence, highlighting the ability to sway decisions by making offers that are too tempting, or perhaps too threatening, to be turned down.'
        },
        {
            id: 4,
            title: 'Star Wars',
            description: '“May the Force be with you.” - Star Wars. A phrase that has transcended the movie itself, becoming a universal wish for good luck and guidance, the Force symbolizes the unseen energy that influences and connects all living things, driving the narrative of the Star Wars saga.'
        },
        {
            id: 5,
            title: 'The Dark Knight',
            description: '“Why so serious?” - The Dark Knight. This haunting question, posed by the Joker, challenges the seriousness with which people approach life, urging a reflection on the balance between order and chaos, sanity and madness, and how the world might look from different perspectives.'
        },
        {
            id: 6,
            title: 'Inception',
            description: '“You mustn\'t be afraid to dream a little bigger, darling.” - Inception. This line encourages boldness in the face of challenges, suggesting that imagination and ambition are keys to overcoming obstacles, no matter how insurmountable they may seem at first.'
        },
        {
            id: 7,
            title: 'The Matrix',
            description: '“There is no spoon.” - The Matrix. This quote underscores the concept that reality is a construct, shaped by our perceptions and beliefs, and that by changing our mindset, we can bend or even break the rules that we once thought were unchangeable.'
        },
        {
            id: 8,
            title: 'Gladiator',
            description: '“What we do in life echoes in eternity.” - Gladiator. This powerful statement speaks to the lasting impact of our actions, suggesting that the choices we make today will resonate long after we are gone, influencing future generations and shaping history.'
        },
        {
            id: 9,
            title: 'Titanic',
            description: '“I\'m the king of the world!” - Titanic. A declaration of triumph and invincibility, this line captures a fleeting moment of absolute freedom and exhilaration, a sense of being on top of the world, even in the face of impending doom.'
        },
        {
            id: 10,
            title: 'Pulp Fiction',
            description: '“They call it a Royale with Cheese.” - Pulp Fiction. This line humorously highlights the differences in culture and language, showing how something as simple as a fast-food item can be perceived differently across the world, and how these small differences add richness to our global experience.'
        },
        {
            id: 11,
            title: 'Fight Club',
            description: '“The first rule of Fight Club is: You do not talk about Fight Club.” - Fight Club. This rule sets the tone for the entire movie, establishing an underground, rebellious culture where the unsaid and unseen become the ultimate truths, challenging societal norms and conventions.'
        },
        {
            id: 12,
            title: 'The Lord of the Rings',
            description: '“One does not simply walk into Mordor.” - The Lord of the Rings. This quote reflects the daunting nature of a seemingly impossible task, emphasizing the dangers and challenges that lie ahead, and the need for careful planning and extraordinary courage to succeed.'
        },
        {
            id: 13,
            title: 'Back to the Future',
            description: '“Roads? Where we\'re going, we don\'t need roads.” - Back to the Future. This line captures the spirit of innovation and the limitless possibilities of the future, suggesting that with the right mindset and technology, the traditional paths and constraints of the past can be left behind.'
        },
        {
            id: 14,
            title: 'The Terminator',
            description: '“I\'ll be back.” - The Terminator. A simple yet ominous promise of return, this line has become iconic, symbolizing the relentless nature of the Terminator and the inevitability of fate, no matter how much one tries to escape or change it.'
        },
        {
            id: 15,
            title: 'Jurassic Park',
            description: '“Your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should.” - Jurassic Park. This cautionary statement reflects the ethical dilemmas of scientific advancement, warning against the pursuit of knowledge and power without considering the potential consequences.'
        },
        {
            id: 16,
            title: 'The Lion King',
            description: '“Hakuna Matata! What a wonderful phrase!” - The Lion King. This cheerful expression promotes a carefree philosophy, encouraging people to let go of their worries and live in the present moment, embracing the joy and simplicity of life without overthinking.'
        },
        {
            id: 17,
            title: 'A Few Good Men',
            description: '“You can\'t handle the truth!” - A Few Good Men. This intense declaration underscores the difficulty of confronting harsh realities, suggesting that some truths are too painful or overwhelming for people to accept, and that denial can be a powerful defense mechanism.'
        },
        {
            id: 18,
            title: 'Good Will Hunting',
            description: '“It\'s not your fault.” - Good Will Hunting. This line serves as a moment of profound emotional release, addressing the deep-seated guilt and pain of the protagonist, and highlighting the importance of compassion and understanding in the healing process.'
        },
        {
            id: 19,
            title: 'The Silence of the Lambs',
            description: '“I do wish we could chat longer, but I\'m having an old friend for dinner.” - The Silence of the Lambs. This chilling line, delivered with eerie politeness, encapsulates the sinister charm of Hannibal Lecter, leaving the audience both intrigued and horrified by his casual approach to violence.'
        },
        {
            id: 20,
            title: 'Schindler\'s List',
            description: '“Whoever saves one life, saves the world entire.” - Schindler\'s List. This deeply moving statement reflects the profound impact of individual acts of kindness and courage, emphasizing that even in the face of overwhelming evil, the value of a single life is immeasurable.'
        },
    ];
};
