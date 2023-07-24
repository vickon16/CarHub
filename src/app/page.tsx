import Container from "@/components/Container";
import { Pattern } from "@/data/svgs";
import carImage from "@/images/carImage.png";
import Image from "next/image";
import { FC } from "react";
import CarCatalogue from "@/components/cars-section/CarCatalogue";
import Search from "@/components/Search";
import { getCarsApi } from "@/lib/utils";

interface HomeProps {
  searchParams: FilterDataType;
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const carsData = await getCarsApi(searchParams);

  return (
    <main className="mb-4 mt-28 md:mt-44">
      <Container>
        {/* hero section */}
        <section className="flex flex-wrap gap-y-10">
          <aside className="flex flex-col w-full left-side gap-y-4 lg:w-2/4">
            <h1 className="text-clamp3Xl leading-tight font-semibold w-full sm:w-[85%]">
              Find, book, rent a car&mdash;quick and super easy!
            </h1>
            <p className="text-clampMd w-full sm:w-[80%] my-2">
              Streamline your car rental experience with our effortless booking
              process.
            </p>

            <Search />
          </aside>

          <aside className="relative right-side w-full lg:w-2/4 h-[300px] xl:h-[600px]">
            <div className="absolute lg:-left-10 w-full h-[300px] xl:h-[400px]">
              <Image
                src={carImage}
                alt="car-image"
                fill
                className="object-contain z-[2]"
              />
            </div>
            <Pattern className="hidden xl:block absolute -top-[60%] 2xl:-top-[70%] -left-[20%] bottom-0 w-clampWMd h-[900px] 2xl:h-[1000px] fill-blue-600" />
          </aside>
        </section>

        {/* favorite section */}
        <CarCatalogue carsData={carsData} searchParams={searchParams} />
      </Container>
    </main>
  );
};

export default Home;
