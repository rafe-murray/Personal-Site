import Tooltip from '@mui/material/Tooltip';

export default function Skill({title, Icon, className}){ 
    
    return(
        <Tooltip title={title} placement="top" arrow>
            {/* <Icon className={className}/> */}
            <Icon className={className}/>
        </Tooltip>
    );
}