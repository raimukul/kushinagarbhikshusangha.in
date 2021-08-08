import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Founder from './Bhikhsu U. Chandramani Mahasthavir.jpg'
import President from './President - Aggamahapandita Bhadant Gyaneshwar.jpg'
import Secretary from './Secretary - Bhikshu U. Nanda Mahathera.jpg'
import Treasurer from './Treasurer - Bhikshu Sobhana Mahathera.jpg'
// import JointSecretary from './JointSecretary Bhikkhu-Nand-Ratan-Thero.jpg'
import VicePresident from './VicePresident - Bhikshu Wannadhaja Mahathera.jpg'
import './About.css'

function About() {
    return (
        <div>
            <Container>
                <Card className='p-3'>
                    <p className='h5'>About us:</p>
                    <p>Kushinagar Bhikshu Sangha is a well known society of Kushinagar, the <em>mahāparinabbāna</em>
                        place of Gautam Buddha. On 18<sup>th</sup> December 1952, it was established by Ven. Bhikhsu U. Chandramani
                        Mahasthavir, the dhamma master of Baba Saheb Dr. B.R. Ambedkar. This registered society is working for the
                        upliftment of Kushinagar and the development of Buddhism as well as education, health, and society since 1952.
                        Kushinagar Bhikshu Sangha is a charitable and non-profit Buddhist organization. It is dedicated to fulfill the mission
                        and vision of Ven. Bhikhsu U. Chandramani Mahasthavir so that the teachings of Gautam Buddha could be spread for the
                        welfare of all beings without any discrimination of caste, coulour, belief, religion, nationality etc.</p>
                </Card>
                <div className='pt-2'>
                    <Card className='p-3'>
                        <p className='h5'>About Founder:</p>

                        <p>The most venerable Bhikshu U. Chandramani Mahasthavir is considered as the main contributer in the upliftment of
                            Kushinagar, and has a very prominent role in the revival of Buddhism in India in 20<sup>th</sup> century.
                            He was born on Tuesday of the 6 Jyesthvadi (Jyeshtha or Jyēṣṭha) of 1876 A.D. in Myanmar. After getting his primary
                            education, he was ordained by Bhikshu U. Candimā in 1888 A.D., and the name &lsquo;Candā&rsquo; was given to him who
                            became famous as Bhikshu U. Chandramani Mahasthavir later. Bodhisattava Anagārika Dharmapāla, the founder of the
                            Maha Bodhi Society of India, brought him to India. He started to stay in Buddhagaya, and also studied in Calcutta.
                            Due to some problems, he returned to Arakan. Again, he came back to India, and met the most Bhadant Mahavir
                            Mahasthavir. </p>
                        <Row >
                            <Col md="8" className='d-flex justify-content-center text-center'>
                                <p>
                                    In 1903 A.D., he got high ordination, and made Kushinagar as his permanent residence and work place.
                                    Bhikshu U. Chandramani Mahasthavir&rsquo;s three disciples like Bhikshu Buddharakshit, Bhikshu Dharmarakshit,
                                    and Bhikshu Sangharakshita (Urgen Sangharakshita) achieved good name &amp; fame in the Buddhist world, and
                                    contributed in the revival of Buddhism as well as development of Buddhist literarure. He sacrificed his entire
                                    life for upliftment of Kushinagar as well as the propagation of Buddhism in India &amp; abroad.
                                    He established Kushinagar Bhikshu Sangha, Kushinagar on December 18, 1952.
                                    He passed away at Kusīnārā Sīmā situated in Myanmar Buddhist Temple, Kushinagar at 9.45 A.M. on 8<sup>th</sup>
                                    May 1972. After his departure, his disciple Aggamahapandita Bhadant Gyaneshwar Mahasthavir,
                                    the President of Kushinagar Bhikshu Sangha, Kushinagar and Chief Abbot of Myanmar Buddhist Temple, Kushinagar
                                    is moving ahead on the mission and vision of Bhikshu U. Chandramani Mahasthavir. <b>&nbsp;</b></p>
                            </Col>
                            <Col md="4" className='d-flex justify-content-center text-center'>
                                <Image src={Founder} className='Aimage' roundedCircle />
                            </Col>
                        </Row>
                    </Card>
                </div>
                <p className='h4 pt-5'>Office Bearers:</p>
                <Card className='p-3'>
                    <Row>
                        <Col md="8" >
                            <p><b>President</b></p>
                            <p>Aggamahapandita Bhadant Gyaneshwar,</p>
                            <p>Myanmar Buddhist Temple, Buddhanagari, Kushinagar,</p>
                            <p>Post &amp; District: Kushinagar, Uttar Pradesh (India)</p>
                            <p>Contact no.: +91-9794625059</p>
                            <p>&nbsp;</p>
                        </Col>
                        <Col md="4" className='d-flex justify-content-center text-center'>
                            <Image src={President} className='w-50' rounded />
                        </Col>
                    </Row>
                </Card>
                <div className='pt-2'>
                    <Card className='p-3'>
                        <Row>
                            <Col md="8"><p><b>Vice-President</b></p>
                                <p>Bhikshu Wannadhaja Mahathera</p>
                                <p>Myanmar Buddha Vihara,</p>
                                <p>Sarnath, Varanasi, Uttar Pradesh (India)</p> </Col>
                            <Col md="4" className='d-flex justify-content-center text-center'>
                                <Image src={VicePresident} className='w-50' rounded /> </Col>
                        </Row>
                    </Card>
                </div>
                <div className='pt-2'>
                    <Card className='p-3'>
                        <Row >
                            <Col md="8">     <p><b>Secretary</b></p>
                                <p>Bhikshu Nanda Mahathera,</p>
                                <p>Myanmar Buddhist Temple, Sankisa,</p>
                                <p>District: Farrukhabad, Uttar Pradesh (India)</p>
                                <p>Contact no.: +91-9415333291</p></Col>
                            <Col md="4" className='d-flex justify-content-center text-center'><Image src={Secretary} className='w-50' rounded /> </Col>
                        </Row>
                    </Card>
                </div>
                <div className='pt-2'>
                    <Card className='p-3'>
                        <Row>
                            <Col md="8"><p><b>Treasurer</b></p>
                                <p>Bhikshu Sobhana Mahathera,</p>
                                <p>Burmese Buddha Vihara,</p>
                                <p>D/64, Sigra, Varanasi, Uttar Pradesh (India)</p>
                                <p>Contact no.: +91-9415302376</p> </Col>
                            <Col md="4" className='d-flex justify-content-center text-center'>
                                <Image src={Treasurer} className='w-50' rounded /> </Col>
                        </Row>
                    </Card>
                </div>
                <div className='pt-2'>
                    <Card className='p-3'>
                        <Row>
                            <Col md="8">
                            <p><b>Joint Secretary</b></p>
                                <p>Dr. Bhikkhu Nand Ratan Thero</p>
                                <p>Monk-in-Chief,</p>
                                <p>Sri Lanka Buddha Vihara,</p>
                                <p>Near Mukutbandhan Chaitya, Kushinagar,</p>
                                <p>Post &amp; District: Kushinagar, Uttar Pradesh (India)</p>
                                <p>Contact no.: +91-9935874061</p> </Col>
                            <Col md="4" className='d-flex justify-content-center text-center'>
                            <Image src={VicePresident} className='w-50' rounded /> </Col>
                        </Row>
                    </Card>
                </div>

            </Container>
        </div>
    )
}

export default About
