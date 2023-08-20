import React from 'react';
import bgImage from '../Images/bgimage.jpg';
import backImage from '../Images/background.jpg';
import ContactAbout from './ContactAbout';
import Testimonial from './Testimonial';
import { FaBook } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

function About() {
    return (
        <div className='bg-[#deb7ff] flex-grow text-center hover:bg-bgImage focus:bg-startImage  bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${backImage})` }}>
                {/* ✍📖📘💜 */}
                <div className="bg-transparent py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl text-center font-bold mb-8">
                            Discover the Power of Keeping a Diary
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Preserving Memories</h2>
                                <p className="text-gray-600">
                                    A diary captures the essence of your daily life, allowing you to
                                    relive precious moments and cherish memories long after they've
                                    passed.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Emotional Outlet</h2>
                                <p className="text-gray-600">
                                    Writing in a diary provides a safe space to express your emotions,
                                    helping you manage stress, anxiety, and navigate through life's
                                    challenges.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Self-Discovery</h2>
                                <p className="text-gray-600">
                                    Journaling promotes self-awareness by encouraging you to explore
                                    your thoughts and feelings, leading to a deeper understanding of
                                    yourself.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Goal Tracking</h2>
                                <p className="text-gray-600">
                                    Keeping a diary helps you set, track, and achieve your goals,
                                    making your aspirations more tangible and guiding you toward
                                    personal growth.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Creative Exploration</h2>
                                <p className="text-gray-600">
                                    Diary writing sparks creativity, giving you an avenue to explore
                                    new ideas, perspectives, and stories through the power of words.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Enhanced Communication</h2>
                                <p className="text-gray-600">
                                    Regular writing in a diary improves your communication skills,
                                    enabling you to articulate thoughts and emotions more effectively.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Mindfulness Practice</h2>
                                <p className="text-gray-600">
                                    Writing daily entries fosters mindfulness, enabling you to be
                                    fully present in the moment and cultivate gratitude for life's
                                    blessings.
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">Time Capsule</h2>
                                <p className="text-gray-600">
                                    Your diary becomes a time capsule for future generations,
                                    offering a glimpse into your life, experiences, and the wisdom
                                    you've gained.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
            <ContactAbout />
            <Testimonial />
            <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>

        </div>
    );
}
export default About;