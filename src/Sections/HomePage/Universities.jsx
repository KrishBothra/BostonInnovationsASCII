import northeastern from "../Assets/universities/1200px-Northeastern_seal-300x300.png";
import mit from "../Assets/universities/2560px-MIT_logo-300x155.png";
import tufts from "../Assets/universities/Tufts_University_logo-300x130.png";
import bostonUniversity from "../Assets/universities/boston-university-logo-bu-vector-eps-free-download-logo-icons-brand-emblems-148777131548ngk-300x134.png";
import harvard from "../Assets/universities/Harvard-Logo-No-Background.png";
import texasAm from "../Assets/universities/texas_am_aggies_logo_primary_2021_sportslogosnet-5634-300x293.png";

export default function Universities() {
  return (
    <>
      <h2 className="mt-10 mb-1 page-centered text-2xl font-medium text-center">
        Partnered with Student Researchers From Schools Such As{" "}
      </h2>
      <div className="mt-5 max-w-[85rem] mx-auto px-8 flex flex-row items-center gap-5 overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
        <img className="w-48" src={mit} alt="MIT" />
        
        <img className="w-48" src={harvard} alt="Harvard" />
        <img className="w-48" src={bostonUniversity} alt="Boston University" />
        <img className="w-48" src={northeastern} alt="Northeastern University" />
        
        
        
        <img className="w-48" src={tufts} alt="Tufts" />
        <img className="w-48" src={texasAm} alt="Texas A&M" />
        



      </div>
    </>
  );
}
