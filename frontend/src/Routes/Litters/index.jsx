import LittersCard from "../../Components/LittersCard";
import LittersForm from "../../Components/LittersForm";
// import LittersRabbitsCard from '../../Components/LittersRabbitsCard';
import Profile from "../../Components/Profile";

const Litters = () => {
  return (
    <div>
      <div className="m-3 ">
        <div className={`d-flex flex-wrap mb-3 bg-light`}>
          <Profile />
        </div>

        <div className="d-inline-flex flex-wrap justify-content-center row row-cols-lg-3 row-cols-sm-1 row-cols-md-2">
          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={1}
          />

          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={2}
          />

          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={3}
          />

          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={4}
          />

          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={5}
          />

          <LittersCard
            littersName="{nombre example}"
            littersAge="2"
            littersImage=""
            littersWeight="10"
            littersKit="2"
            litterBreed="California"
            litterId={6}
          />
        </div>
        {/* <LittersRabbitsCard
          rabbitName='Mario'
          rabbitPhoto=''
          rabbitBreed='California'
          rabbitWeight='10'
          rabbitAge='2'
          sold={false}
          rabbitId={1}
        /> */}

        <div className="d-flex flex-column  flex-wrap justify-content-center align-items-center">
          <LittersForm />
        </div>
      </div>
    </div>
  );
};

export default Litters;
