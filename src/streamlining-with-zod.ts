import { z } from "zod";

const airlineSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  logo: z.string(),
  slogan: z.string(),
  head_quaters: z.string(),
  website: z.string(),
  established: z.string(),
});

const getAirlinesById = async (id: number) => {
  const data = await fetch(
    `https://api.instantwebtools.net/v1/airlines/${id}`
  ).then((res) => res.json());

  return airlineSchema.safeParse(data);
};

const airline = await getAirlinesById(2);

if (airline.success) {
  console.log(airline.data.name);
} else {
  console.log("Airline not found");
}
