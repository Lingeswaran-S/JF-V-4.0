import React, { createContext } from "react";
import BottomAppBar from "../extras/BottomAppBar";

export const QAs = createContext();
const qas = [
  {
    id: 1,
    question: "Brunch this week?",
    ans: [
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      "I'll be in the neighbour",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this I'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatI'll be in the neighbourhood this week. Let's grab a bite to eatweek. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
      "I'll be in the neighbourhood this week. Let's gra",
    ],
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    question: "Your name",
    ans: ["I'll be in the neighbourhood this week. Let's grab a bite to eat"],
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 3,
    question: "your age?",
    ans: ["I'll be in the neighbourhood this week. Let's grab a bite to eat"],
    person: "/static/images/avatar/5.jpg",
  },
];

function QA() {
  return (
    <React.Fragment>
      <QAs.Provider value={qas}>
        <BottomAppBar />
      </QAs.Provider>
    </React.Fragment>
  );
}

export default QA;
