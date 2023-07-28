import classes from "./FilterPerritos.module.css";
import { AiOutlineDown } from "react-icons/ai";
import Button from "../../UI/Button";

interface filterPerritosProps {
  sortBy: string;
  showForm: boolean;
  sizeData: any;
  onChangeSizeData: any;
  onSumbitHandler: (event: any) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterPerritos: React.FC<filterPerritosProps> = ({
  onSumbitHandler,
  sortBy,
  onChangeSizeData,
  sizeData,
  showForm,
  setShowForm,
}) => {
  return (
    <div className={classes.container}>
      <div
        className={classes.filtro}
        onClick={() => setShowForm((prev) => !prev)}
      >
        <h2>Filtros</h2>
        <AiOutlineDown className={classes.icon} />
      </div>
      {showForm && (
        <div className={classes.options}>
          <form className={classes.form} onSubmit={onSumbitHandler}>
            <div className={classes["form-options"]}>
              <div>
                <h3>Tamaño</h3>
                <div className={classes["size-items"]}>
                  <div>
                    <input
                      onChange={onChangeSizeData}
                      type="checkbox"
                      id="xs"
                      name="xs"
                      checked={sizeData.xs}
                    ></input>
                    <label htmlFor="xs">Extra pequeños</label>
                  </div>
                  <div>
                    <input
                      onChange={onChangeSizeData}
                      type="checkbox"
                      id="s"
                      name="s"
                      checked={sizeData.s}
                    ></input>
                    <label htmlFor="s">Pequeños</label>
                  </div>
                  <div>
                    <input
                      onChange={onChangeSizeData}
                      type="checkbox"
                      id="m"
                      name="m"
                      checked={sizeData.m}
                    ></input>
                    <label htmlFor="m">Medianos</label>
                  </div>
                  <div>
                    <input
                      onChange={onChangeSizeData}
                      type="checkbox"
                      id="l"
                      name="l"
                      checked={sizeData.l}
                    ></input>
                    <label htmlFor="l">Grandes</label>
                  </div>
                  <div>
                    <input
                      onChange={onChangeSizeData}
                      type="checkbox"
                      id="xl"
                      name="xl"
                      checked={sizeData.xl}
                    ></input>
                    <label htmlFor="xl">Extra grandes</label>
                  </div>
                </div>
              </div>
              <div>
                <h3>Ordenar por:</h3>
                <select
                  id="sortBy"
                  defaultValue={sortBy}
                  className={classes.sortBy}
                >
                  <option value="dogName">A-Z</option>
                  <option value="-dogName">Z-A</option>
                  <option value="-born">De cachorro a grande</option>
                  <option value="born">De grande a cachorro</option>
                </select>
              </div>
            </div>
            <div className={classes["button-container"]}>
              <Button
                customButton={classes.button}
                disabled={
                  !sizeData.xs &&
                  !sizeData.s &&
                  !sizeData.m &&
                  !sizeData.l &&
                  !sizeData.xl
                }
              >
                Aplicar filtros
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterPerritos;
