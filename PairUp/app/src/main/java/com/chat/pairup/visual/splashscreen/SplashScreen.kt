package com.chat.pairup.visual.splashscreen

import android.window.SplashScreen
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
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
fun SplashScreen() {
    Box(modifier = Modifier.fillMaxSize()) {
        Column(modifier = Modifier.align(Alignment.Center) , horizontalAlignment = Alignment.CenterHorizontally) {
            Image(
                painter = painterResource(id = R.drawable.icon),
                contentDescription = null,
                modifier = Modifier.size(210.dp)
            )
            Text(text = "PairUp", fontSize = 34.sp, fontWeight = FontWeight.Bold,  color = colorResource( id = R.color.colorPrimaryDark))
        }
        Row(modifier = Modifier.align(Alignment.BottomCenter).padding( 30.dp)){
            Text(text = "Smart Messaging,",fontSize = 20.sp, fontWeight = FontWeight.Bold, color = colorResource(id = R.color.colorPrimary))
            Text(text = " Powered by AI", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = colorResource(id = R.color.colorPrimaryDark))
        }
    }
}