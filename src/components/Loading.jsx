import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="absolute inset-0 z-20 flex h-screen items-center justify-center bg-[#0c0e17]">
      <Grid
        height="80"
        width="80"
        color="#fff"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
