import React, { useEffect, useRef, useState } from "react";
import DisplayScreen from "./components/DisplayScreen";
import Options from "./components/Options";
import Twitter from "./components/Twitter";
import axios from "axios";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { stringify } from "postcss";

export default function App() {
  function downloadImage() {
    var node = document.getElementById("display");

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        download(dataUrl, "my-img.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    try {
      setErrorMessage("");
      const quoteObject = await axios.get(
        "https://api.quotable.io/random?tags=famous-quotes"
      );
      setQuote(quoteObject.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleInput() {
    const userInput = prompt("Enter Your Quote :");
    let jsonObject={
      content : userInput
    }
    console.log(jsonObject);
    setQuote(jsonObject);
  }

  function toTwitter() {
    const tweetPost = `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`;
    window.open(tweetPost);
  }

  return (
    <div className="static flex justify-center items-center h-screen w-screen bg-gradient-to-r from-bg-pinkish-red to-bg-bluish">
      <DisplayScreen id="display" content={quote.content} />
      <Options
        id="download"
        onInput={handleInput}
        onclick={fetchRandomQuote}
        onDownload={downloadImage}
      />
      <Twitter onclick={toTwitter} />
    </div>
  );
}
