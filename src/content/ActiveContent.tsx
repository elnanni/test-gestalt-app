import Images from "./Images";
import Banners from "./Banners";
import Randoms from "./Randoms";
import PersonalData from "./PersonalData";

type props = {
  index: number;
};

const ActiveContent = ({ index }: props) => {
  return (
    (index === 0 && <PersonalData />) ||
    (index === 1 && <Images />) ||
    (index === 2 && <Banners />) ||
    (index === 3 && <Randoms />)
  );
};

export default ActiveContent;
