import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filter = ({ typeOfMovie, setTypeOfMovie }) => {
  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={typeOfMovie}
          onChange={(e) => setTypeOfMovie(e.target.value)}
        >
          <FormControlLabel
            value="Cult Film"
            control={<Radio />}
            label="Cult Film"
          />
          <FormControlLabel value="Anime" control={<Radio />} label="Anime" />
          <FormControlLabel
            value="Animation"
            control={<Radio />}
            label="Animation"
          />
          <FormControlLabel
            value="Superhero Film"
            control={<Radio />}
            label="Superhero Film"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
