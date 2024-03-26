import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export default function FileUpload({
  onInput,
}: {
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <input hidden ref={fileInputRef} type="file" onChange={onInput} />
      <Button
        size="lg"
        colorScheme="green"
        mt="24px"
        leftIcon={<AddIcon />}
        onClick={handleClick}
      >
        Select a file
      </Button>
    </>
  );
}
