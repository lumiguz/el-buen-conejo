import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useHttp } from '../../../hooks/useHttp';

const FarmDetail = () => {
  const farmId = useLoaderData();
  const { isLoading, error, sendRequest } = useHttp();
  //   useEffect(() => {
  //     sendRequest(`http://107.21.219.35/api/farms/${farmId}`);
  //   }, [sendRequest, farmId]);

  //create mock data for farm detail with id
  const mockData = [
    {
      id: 1,
      name: 'Granja de prueba 1',
      address:
        'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
      description:
        'Our rabbit farm is a perfect destination for families and animal lovers. Nestled in the picturesque countryside, we offer a unique and educational experience for visitors of all ages. Watch as our fluffy and friendly rabbits roam freely in their spacious enclosures, and even have the opportunity to feed and interact with them. Its a fun and heartwarming day out for the whole family.',
      avatar:
        'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
    },
    {
      id: 2,
      name: 'Granja de prueba 2',
      address:
        'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
      description:
        'At our rabbit farm, we are committed to sustainable and ethical farming practices. Our rabbits are raised in a clean and eco-friendly environment, with a focus on minimizing waste and maximizing efficiency. We offer fresh, locally sourced rabbit meat for those who appreciate the importance of sustainable agriculture and want to enjoy high-quality, naturally raised meat.',
      avatar:
        'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
    },
    {
      id: 3,
      name: 'Granja de prueba 3',
      address:
        'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
      description:
        'Discover the world of rabbits like never before at our educational rabbit farm. We offer guided tours and workshops that teach visitors about rabbit behavior, care, and breeding. Its a great opportunity for school groups, scouting organizations, and anyone interested in learning more about these fascinating creatures. Plus, we have an on-site petting area for some hands-on interaction.',
      avatar:
        'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
    },
    {
      id: 4,
      name: 'Granja de prueba 4',
      address:
        'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
      description:
        'We specialize in the breeding and care of Angora rabbits, known for their luxurious, soft fur. Our farm is a haven for those who appreciate the art of fiber crafting. You can purchase raw Angora wool or finished products made from this exquisite material. We also offer classes for spinners, knitters, and weavers to create their own Angora masterpieces.',
      avatar:
        'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
    },
    {
      id: 5,
      name: 'Granja de prueba 5',
      address:
        'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
      description:
        'Need a safe and caring place for your pet rabbit while you re away? Look no further! Our rabbit farm doubles as a boarding and care center for pet rabbits. Our experienced staff ensures that your furry friend is well-fed, exercised, and kept in a clean and secure environment. We even offer grooming and medical services for those who need a little extra care.',
      avatar:
        'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
    },
  ];

  //get the farm detail with id
  const data = mockData.find((farm) => farm.id === parseInt(farmId));

  //   const data = {
  //     name: 'Granja de prueba',
  //     description: `Lorem ipsum dolor, sit amet co
  //       nsectetur adipisicing elit. Possimus illo
  //       blanditiis dolorum veniam corrupti, fugit digniss
  //       imos? Labore facere laboriosam placeat officiis hic, e
  //       rror libero dolorem iusto optio blanditiis totam mollitia fuga
  //       natus dicta iure aut a eveniet beatae harum soluta non rerum repe
  //       llat excepturi! Recusandae debitis alias aperiam necessitatibus blanditiis?.`,
  //     address: 'Calle 182 # 7-62 Ciudad de Mexico - Codigo Postal 12345 - Mexico',
  //     avatar:
  //       'https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg',
  //   };

  return (
    <div>
      <div className='d-flex flex-column'>
        <h2 className='mt-5 d-flex justify-content-center align-items-center '>
          Detalles de la granja {farmId}
        </h2>

        {/* show the entire farm detail  */}
        <h4 className='my-3 title'>{data.name}</h4>
        <p className='text-break lh-sm text-center'>{data.description}</p>

        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='mb-4 fst-italic'>{data.address}</p>
          <img
            src={data.avatar}
            alt='farmProfile'
            width={'350'}
            className='img-fluid rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default FarmDetail;
