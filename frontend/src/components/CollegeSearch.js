import React, { useEffect, useState } from "react";
// import { First } from "react-bootstrap/esm/PageItem";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CollegeSearch.css";

function getColleges(text, token) {
  return axios
    .get(`http://universities.hipolabs.com/search?name=${text}`, {
      cancelToken: token,
    })
    .then(({ data }) => data);
}
const URL = `http://universities.hipolabs.com/search?name=`;

const CollegeSearch = () => {
  const [text, setText] = useState("");
  const [colleges, setColleges] = useState([]);
  const [debouncedText] = useDebounce(text, 500);
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (debouncedText) {
      getColleges(debouncedText, source.token).catch((e) => {
        if (axios.isCancel(source)) {
          return;
        }
        setColleges([]);
      });
    } else {
      setColleges([]);
    }
    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      );
    };
  }, [debouncedText]);

  console.log(colleges);
  return (
    <>
      {/* <div className='college'> */}
      <div className="search">
        <Card>
          <h2>College Search</h2>
          <label>
            Enter a college name below
            <br></br>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              name="college"
              placeholder="Enter College Here"
            />
          </label>
        </Card>

        {/* <input type="submit" value="Search" /> */}
        <Button variant="primary">Search</Button>
        <Card>
          <ol>
            {colleges.map((colleges) => (
              <li>
                {colleges.name}
                <br></br>
                {colleges.country}
                <br></br>
                {colleges.alpha_two_code}
                <br></br>
                {colleges.web_pages}
              </li>
            ))}
            {/* {colleges.map(colleges => <li>{colleges.domain}</li>)} */}
          </ol>
        </Card>
        {/* </div> */}
      </div>
    </>
  );
};
export default CollegeSearch;
