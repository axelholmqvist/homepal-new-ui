import { useState, useEffect } from "react";

import BackgroundPattern from "@components/atoms/BackgroundPattern";
import Box from "@components/atoms/Box";
import Paper from "@components/atoms/Paper";
import Typography from "@components/atoms/Typography";

interface WelcomeHeroProps {
  name: string;
}

const WelcomeHero = (props: WelcomeHeroProps) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const [greeting, setGreeting] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hours = date.getHours();

    if (hours >= 6 && hours <= 12) {
      setGreeting(`Godmorgon, ${props.name}!`);
      setMessage("Börja dagen datadrivet. 👍");
    }
    if (hours >= 12 && hours <= 18) {
      setGreeting(`God eftermiddag, ${props.name}!`);
      setMessage("Visst är datadrivet arbete intressant? 👌");
    }
    if (hours >= 18 && hours <= 24) {
      setGreeting(`Godkväll, ${props.name}!`);
      setMessage("Datadrivet arbete gör sig bäst sent. 🦉");
    }
    if (hours >= 24 && hours <= 6) {
      setGreeting(`Godnatt, ${props.name}!`);
      setMessage("Datadrivet får en ibland att inte vilja sova. 😉");
    }
  }, [date, props.name]);

  return (
    <Paper
      sx={{
        p: 4,
        bgcolor: "black.main",
        color: "white.main",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BackgroundPattern variant="waves" />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <Box>
          <Typography component="h1" variant="subtitle1" color="grey.400">
            {greeting}
          </Typography>
          <Typography component="h2" variant="h5">
            {message}
          </Typography>
        </Box>
        <Box>
          <Typography component="h1" variant="subtitle1" color="grey.400">
            {date.toLocaleDateString("sv", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Typography>
          <Typography component="h2" variant="h5">
            {date.toLocaleString("sv", {
              hour: "numeric",
              minute: "numeric",
            })}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default WelcomeHero;
