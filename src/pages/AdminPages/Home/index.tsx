import { TablePagination } from "@mui/material";
import PageTransitionWrapper from "../../../components/commonUI/PageTransitionWrapper/PageTransitionWrapper";
import { useTranslation } from "react-i18next"

function Home() {
  
  const { t } = useTranslation();
  return (
    <PageTransitionWrapper>
         <TablePagination
          count={2000}
          rowsPerPage={10}
          page={1}
          component="div"
          onPageChange={() => {}}
        />
        <div>
          {t('hi')}
        </div>
    </PageTransitionWrapper>
  )
}

export default Home