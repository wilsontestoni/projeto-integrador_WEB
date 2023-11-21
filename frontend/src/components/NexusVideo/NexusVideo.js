import styled from "styled-components";
import ReactPlayer from "react-player";
import video from "../../images/utilizando-o-codigo.mp4";

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
      <ReactPlayer url={video} controls={true} width="80%" height="60%" />
    </PlayerWrapper>
  );
}

export default NexusVideo;
