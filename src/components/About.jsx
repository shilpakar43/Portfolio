import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 relative z-10 group">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl z-0" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Passionate Developer based in <span className="text-primary">Kathmandu, Nepal</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            As a Computer Science graduate, I bring a strong foundation in software development principles and a hunger to learn. I specialize in building modern web applications using React and the latest web technologies.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            My journey in coding started with a curiosity about how things work on the internet. Today, I focus on writing clean, maintainable code and creating intuitive user experiences. I'm always looking for new challenges and opportunities to grow as a developer.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">0+</h4>
                                <p className="text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-secondary mb-2">5+</h4>
                                <p className="text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
