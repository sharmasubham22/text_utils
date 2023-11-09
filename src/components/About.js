import React from 'react'

export default function About(props) {

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#0c0d21" }}
    >
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About TextUtils
      </h1>
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#080814" : "white",
            color: props.mode === "dark" ? "white" : "#0c0d21",
          }}
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#0c0d21" : "white",
                color: props.mode === "dark" ? "white" : "#0c0d21",
                border: props.mode === "dark" ? "1px solid white" : "",
              }}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          class="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#080814" : "white",
            color: props.mode === "dark" ? "white" : "#0c0d21",
          }}
        >
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#0c0d21" : "white",
                color: props.mode === "dark" ? "white" : "#0c0d21",
                border: props.mode === "dark" ? "1px solid white" : "",
              }}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          class="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#080814" : "white",
            color: props.mode === "dark" ? "white" : "#0c0d21",
          }}
        >
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#0c0d21" : "white",
                color: props.mode === "dark" ? "white" : "#0c0d21",
                border: props.mode === "dark" ? "1px solid white" : "",
              }}
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
