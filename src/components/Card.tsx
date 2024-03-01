import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import { number } from "astro/zod";
import { Image } from "astro:assets";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const {
    title,
    pubDatetime,
    modDatetime,
    description,
    furtherInfo,
    ogImage,
    teamsize,
    info,
    time,
    unity,
    unreal,
    godot,
    onSteam,
    onItchio,
    specificinity,
  } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li id="post" className="my-6">
      <div id="img_post">
        <center>
          <img src={ogImage?.toString()} height="150px"/>
        </center>
      </div>
      <div id={ furtherInfo ? "description_post": "description_post_full"}>
        <a href={href} className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p>{description}</p>
        <div>
          <p>{info.map((value, index) => "- " + info[index] + " ")}</p>
        </div>
      </div>

      <div id={ furtherInfo ? "content_post" : "content_post_empty"}>
        { teamsize ? (
          <div id="sub_content">
            {teamsize === 1 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            ) : (
              ""
            )}
            {teamsize !== 1 ? (
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="users"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-v-44a9db24=""
              >
                <path
                  fill="currentColor"
                  d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
                ></path>
              </svg>
            ) : (
              ""
            )}
            {" " + teamsize}
          </div>
        ) : (
          ""
        )}
        
        { time ? (
          <div id="sub_content">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="clock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-v-44a9db24="">
              <path
                fill="currentColor"
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z">
              </path>
            </svg>
            {time}
          </div>
          )  : (
            ""
          )} 
            
          { unity ? (
            <div id="sub_content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M243.6 91.6L323.7 138.4C326.6 140 326.7 144.6 323.7 146.2L228.5 201.9C225.6 203.6 222.2 203.4 219.5 201.9L124.4 146.2C121.4 144.6 121.4 140 124.4 138.4L204.4 91.6V0L0 119.4V358.3L78.4 312.5V218.9C78.3 215.6 82.2 213.2 85.1 215L180.3 270.6C183.2 272.3 184.8 275.3 184.8 278.5V389.7C184.8 393 181 395.4 178.1 393.6L98 346.8L19.6 392.6L224 512L428.4 392.6L350 346.8L269.9 393.6C267.1 395.3 263.1 393.1 263.2 389.7V278.5C263.2 275.1 265.1 272.2 267.7 270.6L362.9 215C365.7 213.2 369.7 215.5 369.6 218.9V312.5L448 358.3V119.4L243.6 0V91.6z" />
              </svg>
              Unity
              </div>
          ) : (
            ""
          ) }

          {unreal ? (
            <div id="sub_content">
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141s-10.141-4.54-10.141-10.141c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z" />
              </svg>
            </div>  
          ) : (
            ""
          )}

          {godot ? (
              <div id="sub_content">
                <svg
                  height="1024"
                  width="1024"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m417.61523 76.875c-42.39203 9.424151-84.32671 22.54494-123.64257 42.33398.89912 34.71618 3.14362 67.97967 7.69336 101.76758-15.26846 9.78214-31.31507 18.17757-45.57618 29.62891-14.49005 11.14747-29.2896 21.81231-42.41015 34.84961-26.21196-17.33728-53.95467-33.6299-82.53516-48.01172-30.80748 33.1552-59.61329 68.94006-83.14453 108.98437 18.493057 29.02877 38.32949 58.20569 56.69922 80.95899v197.7832 25.1211 22.86132c.44956.00417.89835.02088 1.34375.0625l150.66992 14.52735c7.89231.76176 14.07749 7.11448 14.62695 15.02343l4.64649 66.50977 131.42969 9.37891 9.05468-61.38672c1.17386-7.95891 8.00029-13.85742 16.05078-13.85742h158.96094c8.04633 0 14.87302 5.89851 16.04688 13.85742l9.05468 61.38672 131.4336-9.37891 4.64258-66.50977c.55362-7.90895 6.73464-14.25751 14.62695-15.02343l150.61133-14.52735c.4454-.04162.89028-.05833 1.33984-.0625v-19.61132l.0625-.01954v-226.13476c21.2165-26.70928 41.30684-56.1715 56.69922-80.95899-23.52291-40.04431-52.34486-75.82917-83.15234-108.98437-28.57217 14.38182-56.32515 30.67444-82.53711 48.01172-13.11639-13.0373-27.88953-23.70214-42.40039-34.84961-14.25695-11.45134-30.32318-19.84677-45.5625-29.62891 4.53724-33.78791 6.7803-67.0514 7.68359-101.76758-39.32002-19.78904-81.24927-32.909829-123.66211-42.33398-16.9335 28.45977-32.41939 59.27922-45.90625 89.4082-15.99275-2.67239-32.05995-3.66203-48.14844-3.85351v-.02539c-.11239 0-.21676.02539-.3125.02539-.0999 0-.20478-.02539-.30468-.02539v.02539c-16.11763.19148-32.17106 1.18112-48.16797 3.85351-13.47854-30.12898-28.95559-60.94843-45.91407-89.4082zm-119.19921 359.52344c50.15113 0 90.79882 40.61746 90.79882 90.75195 0 50.16779-40.64769 90.80859-90.79882 90.80859-50.12617 0-90.78711-40.6408-90.78711-90.80859 0-50.13449 40.66094-90.75195 90.78711-90.75195zm427.17773 0c50.122 0 90.7793 40.61746 90.7793 90.75195 0 50.16779-40.6573 90.80859-90.7793 90.80859-50.15946 0-90.80664-40.6408-90.80664-90.80859 0-50.13449 40.64718-90.75195 90.80664-90.75195zm-213.59961 53.10937c16.14261 0 29.25391 11.90816 29.25391 26.56055v83.58984c0 14.66488-13.1113 26.5625-29.25391 26.5625-16.1426 0-29.22656-11.89762-29.22656-26.5625v-83.58984c0-14.65239 13.08396-26.56055 29.22656-26.56055z"
                    stroke-width="4.16261"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m0 0-1.121-16.063c-.135-1.936-1.675-3.477-3.611-3.616l-38.555-2.751c-.094-.007-.188-.01-.281-.01-1.916 0-3.569 1.406-3.852 3.33l-2.211 14.994h-31.459l-2.211-14.994c-.297-2.018-2.101-3.469-4.133-3.32l-38.555 2.751c-1.936.139-3.476 1.68-3.611 3.616l-1.121 16.063-32.547 3.138c.015-3.498.06-7.33.06-8.093 0-34.374 43.605-50.896 97.781-51.086h.066.067c54.176.19 97.766 16.712 97.766 51.086 0 .777.047 4.593.063 8.093z"
                    fill="#fff"
                    transform="matrix(4.162611 0 0 -4.162611 784.07144 718.723121)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m0 0c0-7.994-6.479-14.473-14.479-14.473-7.996 0-14.479 6.479-14.479 14.473s6.483 14.479 14.479 14.479c8 0 14.479-6.485 14.479-14.479"
                    transform="matrix(4.162611 0 0 -4.162611 367.36686 532.537071)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m0 0c0-7.994 6.477-14.473 14.471-14.473 8.002 0 14.479 6.479 14.479 14.473s-6.477 14.479-14.479 14.479c-7.994 0-14.471-6.485-14.471-14.479"
                    transform="matrix(4.162611 0 0 -4.162611 656.64056 532.537071)"
                  />
                </svg>
              </div>
            ) : (
              ""
          )}

        {specificinity ? (
          <div id="sub_content">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="screwdriver-wrench"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-v-44a9db24=""
            >
              <path
                fill="currentColor"
                d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
              ></path>
            </svg>
          </div>
        ) : (
          ""
        )}
        
        { onSteam ? (
          <div id="sub_content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              {" "}
              <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
            </svg>
            <a href={onSteam.toString()}> Steam</a>
          </div>
        ) : (
          ""
        ) }
         
        { onItchio ? (
          <div id="sub_content">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  d="M256,13.6c-71.7,0-169.4,1.1-189.3,2.9C44.5,29.8,0.4,80.4,0,93.5v22c0,27.8,26.1,52.3,49.7,52.3 c28.3,0,51.9-23.6,51.9-51.4c0,27.8,22.9,51.4,51.2,51.4c28.5,0,50.5-23.6,50.5-51.4c0,27.8,24,51.4,52.5,51.4h0.5
		              c28.5,0,52.5-23.6,52.5-51.4c0,27.8,22.3,51.4,50.5,51.4s51.2-23.6,51.2-51.4c0,27.8,23.6,51.4,51.9,51.4 c23.6,0,49.6-24.5,49.6-52.3v-22c-0.4-13.1-44.5-63.7-66.8-77C376,14,327.7,13.6,256,13.6z M202,162.2 c-23.2,39.9-81.5,40.4-104.3,0.3c-13.9,24.1-45.3,33.4-58.8,28.8c-3.9,41.8-6.6,256.7,21.9,292.7c83.7,19.5,308.9,19.1,390.2,0
		              c32.9-33.6,25.6-253.9,21.9-292.7c-13.4,4.6-44.9-4.7-58.5-28.8c-23,40.1-81.3,39.6-104.5-0.3c-7.2,13-23.8,30.1-54,30.1 C233.9,193.2,213.1,181.2,202,162.2z M155.1,211.9c17.6,0,33.7,0,53.1,21.6c32-3.3,63.7-3.3,95.6,0c19.6-21.4,35.5-21.4,53.1-21.4
		              c56.9,0,70.5,84,91,156.2c18.5,67.2-6.2,69-36.8,69c-45.6-1.8-70.9-34.8-70.9-68.1c-42.5,7-110.4,9.7-168.4,0 c0,33.3-25.3,66.3-70.9,68.1c-30.6,0-55.4-1.8-36.8-69c20.5-72.7,34.2-156.2,91-156.2V211.9z M256,275.3c0,0-37.3,34.4-44.1,46.4 l24.4-0.9v21.3l19.7,0.2c9.8,0.4,19.7,0.7,19.7-0.2v-21.3l24.4,0.9C293.4,309.7,256,275.3,256,275.3z"
                />
              </g>
            </svg>
            <a href={onItchio.toString()}> Itchio</a> 
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}
