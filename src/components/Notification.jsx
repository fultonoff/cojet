import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export default function Notification () {
  const [open, setOpen] = useState(true);
  
  return (
    <Fragment>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert open={open} onClose={() => setOpen(false)} className="bg-gold">
        Thank you for reaching out, our agent will contact you ASAP✈️
      </Alert>
    </Fragment>
  );
}