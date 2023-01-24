import Head from "next/head";

import KPIBox from "@components/organisms/Widget/types/KPIBox";
import ComboChart from "@components/organisms/Widget/types/ComboChart";
import List from "@components/organisms/Widget/types/List";
import ExpandableList from "@components/organisms/Widget/types/ExpandableList";

import Alert from "@components/atoms/Alert";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";

import AvatarGroup from "@components/molecules/AvatarGroup";

import GlobalTopbar from "@components/organisms/GlobalTopbar";
import DashboardToolbar from "@components/organisms/DashboardToolbar";
import DashboardGrid from "@components/organisms/DashboardGrid";

import { Collapse } from "@mui/material";

import { users } from "@data/users";

import { toggle } from "@slices/editModeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
  const layouts = {
    lg: [
      { i: "kpibox1", x: 0, y: 0, w: 3, h: 3, minW: 3 },
      { i: "kpibox2", x: 3, y: 0, w: 3, h: 3, minW: 3 },
      { i: "kpibox3", x: 6, y: 0, w: 3, h: 3, minW: 3 },
      { i: "kpibox4", x: 9, y: 0, w: 3, h: 3, minW: 3 },
      { i: "combochart", x: 0, y: 3, w: 8, h: 4, minW: 3 },
      { i: "list", x: 8, y: 3, w: 4, h: 4, minW: 3 },
      { i: "pivottable", x: 0, y: 7, w: 12, h: 4, minW: 3 },
    ],
    sm: [
      { i: "kpibox1", x: 0, y: 0, w: 2, h: 3, minW: 1 },
      { i: "kpibox2", x: 2, y: 1, w: 2, h: 3, minW: 1 },
      { i: "kpibox3", x: 0, y: 0, w: 2, h: 3, minW: 1 },
      { i: "kpibox4", x: 2, y: 1, w: 2, h: 3, minW: 1 },
      { i: "combochart", x: 0, y: 3, w: 8, h: 4, minW: 3 },
      { i: "list", x: 8, y: 3, w: 4, h: 4, minW: 3 },
      { i: "pivottable", x: 0, y: 7, w: 12, h: 4, minW: 3 },
    ],
  };

  const editMode = useSelector((state) => state.editMode.value);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Analys av arbetsorderkategorier | Homepal</title>
      </Head>
      <GlobalTopbar
        title="Analys av arbetsorderkategorier"
        breadcrumbs={[
          { title: "Insight Studio", link: "/insight-studio" },
          { title: "Dashboards", link: "/insight-studio/dashboards" },
          {
            title: "Analys av arbetsorderkategorier",
            link: "/insight-studio/dashboards/c13cfc5a-5b85-46e9-bf03-d872d58433e1",
          },
        ]}
        extra={<AvatarGroup users={users} />}
        toolbar={<DashboardToolbar />}
        alert={
          <Collapse in={editMode}>
            <Alert
              icon={<Icon name="PaletteOutlined" fontSize="small" />}
              variant="filled"
              severity="info"
              action={[
                <Button
                  color="inherit"
                  variant="text"
                  size="small"
                  onClick={() => dispatch(toggle())}
                  key={1}
                >
                  Avbryt
                </Button>,
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  onClick={() => dispatch(toggle())}
                  key={2}
                >
                  Spara
                </Button>,
              ]}
              sx={{ borderRadius: 0 }}
            >
              Redigerar dashboard...
            </Alert>
          </Collapse>
        }
      />
      <DashboardGrid layouts={layouts} editMode={editMode}>
        <div key="kpibox1">
          <KPIBox
            title="Ej påbörjade arbetsordrar"
            subtitle="Visar antal arbetsordrar som ej påbörjats ännu"
            value="198"
            unit="st"
            comparedValue={2}
            edit={true}
          />
        </div>
        <div key="kpibox2">
          <KPIBox
            title="Påbörjade arbetsordrar"
            subtitle="Visar antal arbetsordrar som är aktiva just nu"
            value="58"
            unit="st"
            comparedValue={2}
            edit={true}
          />
        </div>
        <div key="kpibox3">
          <KPIBox
            title="Påbörjade i tid"
            subtitle="Visar andelen av aktiva arbetsordrar som påbörjades efter 10 dagar"
            value="24,2"
            unit="%"
            comparedValue={-6}
            edit={true}
          />
        </div>
        <div key="kpibox4">
          <KPIBox
            title="Avslutade i tid"
            subtitle="Visar andelen av kvitterade arbetsordrar som avslutades efter 20 dagar"
            value="57,5"
            unit="%"
            comparedValue={2}
            edit={true}
          />
        </div>
        <div key="combochart">
          <ComboChart
            title="Arbetsordrar per kategori"
            subtitle="Visar antalet arbetsordrar för varje kategori"
            edit={true}
          />
        </div>
        <div key="list">
          <List
            title="Arbetsordrar per kategori"
            subtitle="Visar hur mycket antalet arbetsordrar för varje kategori har förändrats från föregående period"
            edit={true}
          />
        </div>
        <div key="pivottable">
          <ExpandableList
            title="Utfall per konto"
            subtitle="Visar hur stort utfallet är per konto (både nuvarande och föregående period)"
            edit={true}
          />
        </div>
      </DashboardGrid>
    </>
  );
}
