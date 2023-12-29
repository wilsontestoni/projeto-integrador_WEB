import styled from "styled-components";
import ReactPlayer from "react-player";
// import video from "https://www.youtube.com/watch?v=23veejsZ5r4";

const PlayerWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
`;

function NexusVideo() {
  return (
    <PlayerWrapper>
      <ReactPlayer url='https://www.youtube.com/watch?v=lTRiuFIWV54&t=10s' />
    </PlayerWrapper>
  );
}

export default NexusVideo;
