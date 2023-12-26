"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    ) {
      return true
    }
  } catch (error) {
    return false
  }
  return false
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    alert(isValidLink ? "valid link" : "invalid link")
  };
  return (
    <form
      className="flex flex-wrap flex-row gap-2 mt-12 w-full"
      onSubmit={handleSubmit}
    >
      <Input
        className="flex lg:w-[79%]"
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Searchbar;
