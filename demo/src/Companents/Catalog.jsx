import React from "react";
import { NavLink } from "react-router-dom";
import bars from "../images/catalogBar.png";
import desktop from "../images/computer.png";
import laptop from "../images/laptop.png";
import monitor from "../images/monitor.png";
import motherboard from "../images/motherboard.png";
import cpu from "../images/cpu.png";
import cooler from "../images/cooler.png";
import ram from "../images/ram.png";
import hdd from "../images/hdd.png";
import vga from "../images/graphicCard.png";
import opticalDrive from "../images/opticalDrive.png";
import mouse from "../images/mouse.png";
import keyboard from "../images/keyboard.png";
import speaker from "../images/speaker.png";
import cable from "../images/cable.png";
import printer from "../images/printer.png";
import headphone from "../images/headphone.png";

import hyper from "../images/Partners/hyper.png";
import steel from "../images/Partners/steel.png";
import razer from "../images/Partners/razer.png";
import corsair from "../images/Partners/corsair.png";
import geforce from "../images/Partners/geforce.png";
import zow from "../images/Partners/zow.png";
import asus from "../images/Partners/asus.png";
import anda from "../images/Partners/anda.png";
import msi from "../images/Partners/msi.png";
import keen from "../images/Partners/keen.png";
import nzxt from "../images/Partners/nzxt.jpg";
import { FaHeadset } from "react-icons/fa";

function Catalog() {
  return (
    <>
      <div className="catalog ">
        <ul className="catalogBody">
          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="/category/pc">
              <div className="catalog1">
                <img src={desktop} />
                <p>Desktop Computers</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/pc/acer">Acer PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/gigabyte">Gigabyte PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/lenovo">Lenovo PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/hp">HP PC</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/laptop">
              <div className="catalog1">
                <img src={laptop} />
                <p> Laptops, Ultrabooks</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/laptop/apple">Apple Macbook</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/acer">Acer</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/dell">Dell</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/msi">Msi</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/microsoft">
                  MicroSoft notebooks
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/monitor">
              <div className="catalog1">
                <img src={monitor} />
                <p>Monitors</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/monitor/acer">Acer </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/aoc">AOC </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/asus">Asus </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/benq">Benq </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/dell">Dell </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/hp">HP </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/lenovo">Lenovo</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/lg">LG </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/msi">Msi </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/samsung">Samsung</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/rampage">Rampage</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/mainboard">
              <div className="catalog1">
                <img src={motherboard} />
                <p>Motherboards</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/mainboard/asrock">ASRock</NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/asus">Asus </NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/biostar">Biostar</NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/msi">MSI </NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/gigabyte">Gigabyte</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/cpu">
              <div className="catalog1">
                <img src={cpu} />
                <p>Processors</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/cpu/intel">Intel </NavLink>
              </li>
              <li>
                <NavLink to="category/cpu/amd">AMD </NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/cooler">
              <div className="catalog1">
                <img src={cooler} />
                <p>Refrigeration devices</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/cooler/deepcool">DeepCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/rampage">Rampage</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/evga">EVGA</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/thermaltake">Thermaltake</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/asus">ASUS</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/arctic">ARCTIC</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/aerocool">AeroCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/aerdeepcool">AerDeepCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/be quiet">Be Quiet</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/nzxt">NZXT</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/ram">
              <div className="catalog1">
                <img src={ram} />
                <p>Operating memory</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/ram/crucial">Crucial</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/g.skill">G.SKILL</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/klevv">Klevv</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/lexar">Lexar</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/kingston">Kingston</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/corsair">Corsair</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/adata">Adata</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/storage">
              <div className="catalog1">
                <img src={hdd} />
                <p>Storage devices</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/storage/hdd">HDD storage devices</NavLink>
              </li>
              <li>
                <NavLink to="category/storage/ssd">SSD storage devices</NavLink>
              </li>
              <li>USB flash cards</li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/vga">
              <div className="catalog1">
                <img src={vga} />
                <p>Video cards</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/vga/asus">Asus</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/galaxy">GALAXY</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/msi">MSI</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/nvidia">NVidia</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/zotac">Zotac</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/optic">
              <div className="catalog1">
                <img src={opticalDrive} />
                <p>Optical Drive</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/optic/dwd-rw">DWD-RW</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/mouse">
              <div className="catalog1">
                <img src={mouse} />
                <p>Computer mouse</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/mouse/a4tech">A4tech</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/apple">Apple</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/logitech">Logitech</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/razer">Razer</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/keyboard">
              <div className="catalog1">
                <img src={keyboard} />
                <p>Keyboards</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/keyboard/a4tech">A4tech</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/corsair">Corsair</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/gigabyte">Gigabyte</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/razer">Razer</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/speaker">
              <div className="catalog1">
                <img src={speaker} />
                <p>Loudspeakers</p>
              </div>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/speaker/dinamik edifier">
                  Dynamic Edifier
                </NavLink>
              </li>
              <li>
                <NavLink to="category/headphone/dinamik mikado">
                  Dynamic Mikado
                </NavLink>
              </li>
              <li>
                <NavLink to="category/headphone/dinamik rampage">
                  Dynamic Rampage
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/headphones">
              <div className="catalog1">
                <img src={headphone} />
                <p>Headphones </p>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* <div className="partners">
          <div className="partnersHead">
            <h2>OUR PARTNERS</h2>
          </div>
          <div className="partnersImages">
            <img src={hyper} />
            <img src={steel} />
            <img src={razer} />
            <img src={corsair} />
            <img src={geforce} />
            <img src={zow} />
            <img src={asus} />
            <img src={anda} />
            <img src={msi} />
            <img src={nzxt} />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Catalog;
