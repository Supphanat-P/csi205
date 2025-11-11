const Footer = () => {
  return (
    <>
      <footer
        className="bg-dark text-white w-100 mt-auto"
        style={{ minHeight: "60px", verticalAlign: "middle", display: "flex" }}
      >
        <h1 className="m-auto text-center">
          มหาวิทยาลัยศรีปทุม เทคโนโลยีสารสนเทศ วิทยาการคอมพิวเตอร์{" "}
          <a className="text-white" href="https://www.spu.ac.th/fac/informatics/">SPUIT</a>
        </h1>
      </footer>
    </>
  );
};
export default Footer;
