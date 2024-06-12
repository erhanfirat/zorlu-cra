import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../main";
import { Button } from "./Button";

export const Motivation = () => {
  const { isPending, error, data, isLoading, isFetching, isRefetching } =
    useQuery({
      queryKey: ["motivation"],
      queryFn: () =>
        axios
          .get("https://workintech-ng.onrender.com/motivation")
          .then((res) => res.data),
    });

  const refreshWord = () => {
    queryClient.invalidateQueries({ queryKey: ["motivation"] });
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <blockquote>
        <p>{data.word}</p>
        <cite>{data.author}</cite>
      </blockquote>
      <Button onClick={refreshWord} disabled={isRefetching}>
        Refresh
      </Button>
    </>
  );
};
