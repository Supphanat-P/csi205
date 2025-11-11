import React from "react";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <>
      <div
        className="container mt-3"
        style={{ height: "fit-content", width: "100%" }}
      >
        <div className="row justify-content-center">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <div className="mb-2">
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-circle shadow"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    border: "5px solid #0d6efd",
                  }}
                />
              </div>
              <h2 className="card-title mb-3 text-primary">
                ศุภณัฐ เดี่ยววนิช
              </h2>
              <h5 className="text-muted mb-4">รหัสนักศึกษา: 67162090</h5>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ชั้นปี:</strong> ปี 2
                </p>
                <p className="mb-2">
                  <strong>สาขา:</strong> วิทยาการคอมพิวเตอร์
                </p>
                <p className="mb-2">
                  <strong>คณะ:</strong> วิทยาศาสตร์และเทคโนโลยี
                </p>
                <p className="mb-2">
                  <strong>มหาวิทยาลัย:</strong> มหาวิทยาลัยศรีปทุม
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
