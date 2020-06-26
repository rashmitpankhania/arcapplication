import React from 'react';
import { Lottie } from '@crello/react-lottie';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CallToAction from '../ui/CallToAction';
import visionImg from '../../assets/vision.svg';
import technologyData from '../../animations/technologyAnimation/data.json';
import consultationImg from '../../assets/consultationIcon.svg';
import mockupImg from '../../assets/mockupIcon.svg';
import reviewImg from '../../assets/reviewIcon.svg';
import designImg from '../../assets/designIcon.svg';
import buildImg from '../../assets/buildIcon.svg';
import launchImg from '../../assets/launchIcon.svg';
import maintainImg from '../../assets/maintainIcon.svg';
import iterateImg from '../../assets/iterateIcon.svg';

const rows = [
  {
    id: 'njasndaknsdka',
    title: 'Consultation',
    body: [
      'Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.',
      'Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.',
      'Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.',
    ],
    bgColor: '#b3b3b3',
    img: consultationImg,
    imgHeight: '70%',
    imgWidth: '100%',
    maxWidth: 700,
  },
  {
    id: 'asjkndkasnkajsnd',
    title: 'Mockup',
    body: [
      'After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.',
      'Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.',
      'This helps us understand and refine the solution itself before getting distracted by specifics and looks.',
    ],
    bgColor: '#f47172',
    img: mockupImg,
    imgWidth: '60%',
    imgHeight: '100%',
    maxWidth: 1000,
  },
  {
    id: 'asndkjansjnkasjd',
    title: 'Review',
    img: reviewImg,
    body: [
      'Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.',
      'We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.',
      'Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.',
    ],
    imgHeight: '75%',
    imgWidth: '50%',
    bgColor: '#56b54a',
  },
  {
    id: 'uiasdusaodoasdoi',
    title: 'Design',
    img: designImg,
    maxWidth: 1000,
    body: [
      'Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.',
      'No aspect is superfluous, and care will be taken with every decision.',
    ],
    bgColor: '#a67c51',
    imgWidth: '80%',
    imgHeight: '100%',
  },
  {
    id: 'asnddjanskdnaks',
    title: 'Review',
    img: reviewImg,
    body: [
      'A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.',
      'This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.',
    ],
    bgColor: '#56b54a',
    imgHeight: '75%',
    imgWidth: '50%',
  },
  {
    id: 'asjndkanskdnasjdn',
    title: 'Build',
    img: buildImg,
    body: [
      'Here’s where we get down to business.',
      'Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.',
      'Each area is then developed in order of importance until ready to be connected to the next piece.',
      'Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.',
      'Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.',
      'Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.',
    ],
    bgColor: '#fbb03b',
    imgWidth: '80%',
    maxWidth: 800,
  },
  {
    id: 'asjdnkasndjanskjdn',
    title: 'Launch',
    img: launchImg,
    body: [
      'The moment we’ve all been waiting for.',
      'When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.',
      'When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.',
    ],
    bgColor: '#c2362e',
    imgHeight: '80%',
    maxWidth: 200,
  },
  {
    id: 'kalskalskdmlasd',
    title: 'Maintain',
    img: maintainImg,
    body: [
      'Our work doesn’t end there.',
      'After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.',
      'From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.',
    ],
    bgColor: '#905bce',
  },
  {
    id: 'uaisuaisuia',
    title: 'Iterate',
    img: iterateImg,
    body: [
      'The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.',
      'By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.',
      'Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.',
    ],
    bgColor: '#29abe2',
    imgWidth: '80%',
    imgHeight: '80%',
    maxWidth: 500,
  },
];

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingRight: '5em',
    paddingBottom: '10em',
    paddingTop: '2em',
    paddingLeft: '5em',
    [(theme.breakpoints.down('sm'))]: {
      paddingRight: '1.5em',
      paddingLeft: '1.5em',
      paddingTop: '1em',
    },
  },
  bottomContainer: {
    paddingRight: '2.5em',
    paddingBottom: '8em',
    paddingTop: '4em',
    paddingLeft: '2.5em',
    [(theme.breakpoints.down('sm'))]: {
      paddingRight: '1.5em',
      paddingLeft: '1.5em',
      paddingTop: '1em',
    },
  },
}));

const RevolutionPage = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { setSelectedIndex, setValue } = props;
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Typography
            variant="h1"
            style={{
              fontSize: '4rem', fontFamily: 'Pacifico', color: theme.palette.common.arcBlue,
            }}
            align={matchesMD ? 'center' : undefined}
          >
            The Revolution
          </Typography>
        </Grid>
        {/* Vision */}
        <Grid item container style={{ marginTop: '5em' }} alignItems="center" direction={matchesMD ? 'column' : 'row'}>
          <Grid item lg>
            <img src={visionImg} alt="showing vision" style={{ maxWidth: matchesSM ? 300 : '40em', marginRight: matchesMD ? 0 : '5em', marginBottom: matchesMD ? '5em' : 0 }} />
          </Grid>
          <Grid item lg style={{ maxWidth: '40em' }}>
            <Typography variant="h2" gutterBottom align={matchesMD ? 'center' : 'right'}>
              Vision
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
              The rise of computers, and subsequently the Internet, has completely
              altered every aspect of human life. This has increased our comfort,
              broadened our connections, and reshaped how we view the world.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
              What once was confined to huge rooms and teams of engineers now resides
              in every single one of our hands. Harnessing this unlimited potential by
              using it to solve problems and better lives is at the heart of everything we do.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
              We want to help businesses capitalize on the latest and greatest technology.
              The best way to predict the future is to be the one building it, and we want
              to help guide the world into this next chapter of technological expansion,
              exploration, and innovation.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
              By holding ourselves to rigorous standards and pristine quality, we can ensure
              you have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
              We see a future where every individual has personalized software custom
              tailored to their lifestyle, culture, and interests, helping them overcome
              life’s obstacles. Each project is a step towards that goal.
            </Typography>
          </Grid>
        </Grid>
        {/* Technology */}
        <Grid item container style={{ marginTop: '10em', marginBottom: '10em' }} alignItems="center" direction={matchesMD ? 'column' : 'row'}>
          <Grid item lg style={{ marginTop: matchesSM ? '4em' : 0, maxWidth: '40em' }}>
            <Typography variant="h2" gutterBottom align={matchesMD ? 'center' : undefined}>
              Technology
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              In 2013, Facebook invented a new way of building websites.
              This new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              Instead of chaining together long individual pages, like traditional websites,
              React websites are built with little chunks of code called components.
              These components are faster, easier to maintain, and are easily reused and customized,
              each serving a singular purpose.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              Two years later they shocked the world by releasing a similar system, React Native,
              for producing iOS and Android apps. Instead of having to master two
              completely separate development platforms, you can leverage the knowledge
              you already possessed from building websites and reapply it directly!
              This was a huge leap forward.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              This technology is now being used by companies like AirBnB, Microsoft,
              Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased
              Instagram large portions of it were even rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much as
              possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              These technical advancements translate into savings by significantly
              reducing the workload and streamlining the workflow for developing
              new pieces of software, while also lowering the barrier to entry
              for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
          <Grid item lg justify={matchesMD ? 'center' : 'flex-end'} container>
            <Lottie
              config={{ loop: true, autoplay: true, animationData: technologyData }}
              height="40em"
              width="40em"
              style={{ maxWidth: '40em', margin: 0 }}
            />
          </Grid>
        </Grid>
        <Grid item container justify="center" style={{ marginTop: '3em' }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Process
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column">
        {rows.map((obj) => (
          <Grid
            key={obj.id}
            item
            container
            className={classes.bottomContainer}
            direction={matchesMD ? 'column-reverse' : 'row'}
            style={{ backgroundColor: obj.bgColor }}
          >
            <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesMD ? 'center' : 'inherit'}
                  gutterBottom
                  style={{ color: 'black', marginTop: matchesMD ? '1em' : '5em' }}
                >
                  {obj.title}
                </Typography>
              </Grid>
              <Grid item>
                {obj.body.map((row) => (
                  <Typography
                    align={matchesMD ? 'center' : 'inherit'}
                    key={row.length}
                    variant="body1"
                    style={{ color: 'white', maxWidth: '20em' }}
                    paragraph
                  >
                    {row}
                  </Typography>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              lg
              style={{ alignSelf: 'center', marginTop: matchesMD ? '3em' : 0 }}
            >
              <img
                src={obj.img}
                alt={obj.title}
                width={obj.imgWidth}
                style={{ maxWidth: obj.maxWidth }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

RevolutionPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default RevolutionPage;
