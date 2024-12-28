import wallet from "../../../assets/images/wallet.png";

type Props = {};

const HomeCard = (props: Props) => {
  return (
    <section className="w-full md:w-[31%]  bg-white rounded-lg p-5 flex flex-col gap-4 ovef">
      <div className="imageContainer w-[20%]  bg-[#F4F5FA] rounded-lg py-2 flex items-center justify-center border-2 border-gray-200">
        <img src={wallet} className="h-8 w-8 object-cover" alt="" />{" "}
      </div>

      <h3 className="font-bold">Total Amouts</h3>

      <h3 className="text-primary font-bold text-xl">22</h3>
    </section>
  );
};

export default HomeCard;
