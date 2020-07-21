import React, { useEffect, useState } from "react";
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
const CollegeSearch = () => {
  const [text, setText] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedText] = useDebounce(text, 500);
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (debouncedText) {
      setLoading(true);
      getColleges(debouncedText, source.token)
        .then((data) => setColleges(data))
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          console.error("unable to fetch colleges", err);
        })
        .finally(() => {
          setLoading(false);
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
<<<<<<< HEAD

  return (
    <>
      {/* <div className='college'> */}
=======
  return (
    <>
>>>>>>> master
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
<<<<<<< HEAD

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
=======
        {/* CREATE A LOADING INDICATOR */}
        {loading && <p>Loading...</p>}
        <Button variant="primary">Search</Button>
        <Card>
          <ol>
            {colleges.map((college) => (
              <li>
                {college.name}
                <br></br>
                {college.country}
                <br></br>
                {college.alpha_two_code}
                <br></br>
                {college.web_pages}
              </li>
            ))}
          </ol>
        </Card>
>>>>>>> master
      </div>
    </>
  );
};
export default CollegeSearch;
