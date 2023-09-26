import React from "react";

const CodeBlock = ({ num }) => {
  const codeSnippet = [
    `
    # FE 폴더에서
        - npm i
        - npm start
    
    # BE 폴더에서
        - npm i
        - nodemon server.js
    `,
    `
    # frontend 폴더에서
        - npm i
        - npm start
    `,
    `
    # frontend 폴더에서
        - npm i
        - npm start

    # backend 폴더에서
        - npm i
        - node server.js
    `,
    `
    # backend 폴더에서
        - python -m venv venv
        - source venv/Scripts/activate

        # 최초 실행할 경우 꼭 수행
            # 데이터베이스 생성
                - python manage.py migrate

            # json 데이터를 DB에 dump
                - python manage.py loaddata movies/worldcupmovies.json movies/newmovie.json movies/movies.json 
                  movies/genre.json movies/directors.json movies/actors.json

        - python manage.py runserver

    # frontend 폴더에서
        - npm i
        - npm run serve
    `,
    `
    # CLIENT 폴더에서
        - npm i
        - npm start
    `,
  ];

  return (
    <div style={{ backgroundColor: "#d3d3d3", borderRadius: "10px" }}>
      <pre>
        <code>{codeSnippet[num - 1]}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
