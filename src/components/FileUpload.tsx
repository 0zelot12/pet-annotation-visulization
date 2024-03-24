/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/react';
import { useRef } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";

export default function FileUpload({ onInput }: { onInput: ($event: any) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <input
        hidden
        ref={fileInputRef}
        type="file"
        onChange={onInput}
      />
      <Button size='lg' colorScheme='green' mt='24px' leftIcon={<MdOutlineFileUpload />} onClick={handleClick}>
        Select a file
      </Button>
    </>
  );
}
