import React from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

function Home() {
  {
    document.body.style.backgroundColor = "rgba(25,25,25)";
  }
  return (
    <>
      <div
        className="container text-white text-start mg-auto"
        style={{ width: "50rem" }}
      >
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <div className="contanier fs-5">
              You work at a startup that is building an interface for admins to
              see and delete users. The users will be provided via an API. Your
              job is to build out a working UI. See image below for reference.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              Note - this is for reference only. You don't need to build the
              exact same UI.
            </div>
          </li>
        </ul>
        <div className="container text-start">
          <img
            src="https://dark-shield-55e.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd74df831-9d44-4654-86e9-fd03ed48a402%2Fe1bac586-6c26-4e88-8eae-209bfc922dc7%2FUntitled.png?table=block&id=122daaef-2eaa-4c1f-b033-f6735d7950c5&spaceId=d74df831-9d44-4654-86e9-fd03ed48a402&width=2000&userId=&cache=v2"
            alt="No Image"
            width="700"
            height="450"
          />
        </div>
        <h5>These are the requirements :</h5>
        <ol>
          <li>
            <div className="container fs-5">
              Column titles must stand out from the entries.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              There should be a search bar that can filter on any property.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              You should be able to edit or delete rows in place.(There is no
              expectation of persistence. Edit and delete are expected to only
              happen in memory.)
            </div>
          </li>
          <li>
            <div className="container fs-5">
              You need to implement pagination: Each page contains 10 rows.
              Buttons at the bottom allow you to jump to any page including
              special buttons for first page, previous page, next page and last
              page. Pagination must update based on search/filtering. If there
              are 25 records for example that match a search query, then
              pagination buttons should only go till 3.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              You should be able to select one or more rows. A selected row is
              highlighted with a grayish background color. Multiple selected
              rows can be deleted at once using the 'Delete Selected' button at
              the top right bin icon.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              Search box placeholder text should start with Search.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              Action element must be a button with a specific class name like
              edit, delete, save.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              Navigation elements must be a div/button, and should have class
              name as first-page, previous-page, next-page and last-page and
              page numbers should be mentioned accordingly.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              On clicking edit action in a row, it should be editable in the row
              itself.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              feel free to use any libraries.
            </div>
          </li>
          <li>
            <div className="container fs-5">
              On executing, your application should be running successfully on
              deployed on vercel, netlify or any similar platform
            </div>
          </li>
          <li>
            <div className="container fs-5">
              after completing deployment. please submit here.
            </div>
          </li>
        </ol>
        <h6>Note :</h6>
        <div className="container fs-5">
          The users are sorted by id field. There is no alphabetical sorting.
        </div>
        <h6>Request Type :</h6>
        <div className="container fs-5">GET</div>
        <h6>Endpoint :</h6>
        <Link
          className="endpoint"
          to="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        >
          https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
        </Link>
        <h6>Sample Response :</h6>
        <Editor
          text={`
        javascript
        [
            {
            "id": "1",
            "name": "Aaron Miles",
            "email": "aaron@mailinator.com",
            "role": "member"
            },
            {
            "id": "2",
            "name": "Aishwarya Naik",
            "email": "aishwarya@mailinator.com",
            "role": "member"
            },
            {
            "id": "3",
            "name": "Arvind Kumar",
            "email": "arvind@mailinator.com",
            "role": "admin"
            }
        ]`}
        />
      </div>
    </>
  );
}

export default Home;
