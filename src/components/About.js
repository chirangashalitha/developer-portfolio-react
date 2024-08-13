import React from "react";
import "./About.css";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container">
      <h2 className="about-title">About</h2>
      <p>
        Passionate about creating user-friendly & visually appealing designs.
      </p>

      <motion.div animate={( y: 100 )}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
}

export default About;
