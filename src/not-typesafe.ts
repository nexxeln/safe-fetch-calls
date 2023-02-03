type Airline = {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
};

const getAirlinesById = async (id: number): Promise<Airline> => {
  const data = await fetch(
    `https://api.instantwebtools.net/v1/airlines/${id}`
  ).then((res) => res.json());

  return data as Airline;
};

const airline = await getAirlinesById(2);

console.log(airline.name);

// false sense of type safety
// this can break down very easily if the API changes
