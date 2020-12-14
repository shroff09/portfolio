import React from "react";
import './style.css';

const person = {
name:'Ankit',
profile:'Web developer'
}

const Home = () => {
  return (
    <>
    <h1>{person.name}</h1>
    <div className="box">
    <h2>{person.profile}</h2>
    <article>ghkgdhgk fdkgdkgkdg  hfg gfkgh gkdgkdghk kdghdk ghdfkg eirw aw fksf kgdfgdk djglg bbcnbc, jdkgdkg nkdf bnfkb nkcbc nbdkbn nbdfdk nvdjnd nbfkd </article>
    </div>
    </>
  );
};

export default Home;
