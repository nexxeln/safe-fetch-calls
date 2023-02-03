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

const isAirline = (airline: unknown): airline is Airline => {
  return (
    typeof airline === "object" &&
    airline !== null &&
    "id" in airline &&
    "name" in airline &&
    "country" in airline &&
    "logo" in airline &&
    "slogan" in airline &&
    "head_quaters" in airline &&
    "website" in airline &&
    "established" in airline
  );
};

const getAirlinesById = async (id: number): Promise<Airline | null> => {
  const data = (await fetch(
    `https://api.instantwebtools.net/v1/airlines/${id}`
  ).then((res) => res.json())) as unknown;

  if (!isAirline(data)) {
    return null;
  }

  return data;
};

const airline = await getAirlinesById(2);

if (airline !== null) {
  console.log(airline.name);
} else {
  console.log("Airline not found");
}
