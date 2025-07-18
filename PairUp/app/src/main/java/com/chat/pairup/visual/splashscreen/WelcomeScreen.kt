package com.chat.pairup.visual.splashscreen

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
//import androidx.compose.foundation.layout.FlowRowScopeInstance.align
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.chat.pairup.R

@Composable
@Preview(showSystemUi = true)

fun WelcomeScreen() {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Image(
            painter = painterResource(id = R.drawable.icon),
            contentDescription = null,
            modifier = Modifier.size(400.dp)
        )
        Spacer(modifier = Modifier.height(10.dp))
        Text(
            text = "PairUp",
            fontSize = 34.sp,
            fontWeight = FontWeight.Bold,
            color = colorResource(id = R.color.colorPrimaryDark)
        )
        Spacer(modifier = Modifier.height(10.dp))
        Row(modifier = Modifier.padding(0.dp)) {
            Text(text = "Read Our ", color = Color.Gray)
            Spacer(modifier = Modifier.width(5.dp))
            Text(
                text = "Privacy Policy",
                color = colorResource(id = R.color.purple_200),
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.width(5.dp))
            Text(text = "Tap Agree And Continue to ", color = Color.Gray)
        }
        Row {
            Text("accept the", color = Color.Gray)
            Spacer(modifier = Modifier.width(5.dp))
            Text(
                text = "Terms Of Services ",
                color = colorResource(id = R.color.purple_200),
                fontWeight = FontWeight.Bold
            )
        }
        Spacer(modifier = Modifier.height(10.dp))
        Button(onClick = {/*TODO*/ },
            modifier = Modifier.size(280.dp, 43.dp),
            shape = RoundedCornerShape(8.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = colorResource(id = R.color.colorPrimaryDark)
            )
        ) {
            Text(text = "Accept and Login")
        }
    }
}