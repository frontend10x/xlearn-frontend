import { Box, Button, Card, CardContent, Typography } from "@mui/material";

let border = 'border-danger';
let textButton = 'Incorrecto'
let buttonColor = 'error'

export const EvaluationSummary = ({question, answers, number}) => {
    const { user, correct } = answers;
    
    if(user?.id === correct?.id){
        border = 'border-success';
        textButton = 'Correcto'
        buttonColor = 'success'
    }

    return(
        <Card variant="outlined" className={`mt-4 d-flex ${border} border-2`}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        <span className="p-4">
                            <strong>{number + 1}</strong>
                        </span> 
                        {question}
                    </Typography>
                </CardContent>
            </Box>
            <Box className="d-flex flex-grow-1 justify-content-end align-items-center p-3">
                <Button variant="outlined" color={buttonColor}>
                    <strong>{textButton}</strong>
                </Button>
            </Box>
            
        </Card>
    );
}