package com.chat.pairup.visual.splashscreen.userregistrationscreen

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.chat.pairup.R
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue


@Composable
@Preview(showSystemUi = true)
fun UserRegistrationScreen(){
    var expanded by remember {
        mutableStateOf(false)
    }
    var selectedCountry by remember {
        mutableStateOf("India")
    }
    Column(modifier = Modifier.fillMaxSize().padding(20.dp), horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Enter Your Phone Number", fontWeight = FontWeight.Bold, color = colorResource(id = R.color.colorPrimaryDark), fontSize = 18.sp)
        Spacer(modifier = Modifier.height(10.dp))
        Text(text = "PairUp will verify your phone number")
        Text(text = "make sure to enter a valid number")
//        Spacer(modifier = Modifier.height(10.dp))
        Spacer(modifier = Modifier.height(20.dp))

        TextButton(onClick = {expanded = true}, modifier = Modifier.fillMaxWidth()) {
            Box(modifier =  Modifier.width(230.dp)){
                Text(text = selectedCountry.toString(), modifier = Modifier.align(Alignment.Center), fontSize = 20.sp)
                Icon()
            }
        }


    }
}