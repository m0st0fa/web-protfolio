/* eslint-disable react/prop-types */
const ProjectsDetails = ({ item }) => {
    const { name, image, features } = item;
  
    return (
      <div className="w-full mx-auto bg-white shadow-lg rounded-md overflow-hidden"  data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <img className="w-full h-48 object-cover object-center" src={image} alt={name} />
        <div className="p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-3 text-teal-600">{name}</h2>
          <ul className="list-disc ml-6">
            {features.map((feature, index) => (
              <li key={index} className="text-base text-gray-800">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProjectsDetails;
  